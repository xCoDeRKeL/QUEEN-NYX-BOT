const fs = require('fs');
const config = require('../settings.js'); // Update this based on your actual config file

const banFilePath = './data/ban.json';

// Load the ban list from file
const loadBanList = () => {
    if (!fs.existsSync(banFilePath)) fs.writeFileSync(banFilePath, '{}');
    return JSON.parse(fs.readFileSync(banFilePath));
};

// Save the ban list
const saveBanList = (banList) => {
    fs.writeFileSync(banFilePath, JSON.stringify(banList, null, 2));
};

// Ban a user
const banUser = async (m, PrexzyVilla) => {
    if (!m.key.remoteJid.endsWith('@g.us')) return; // Ensure it's in a group

    let numberToBan = '';
    if (m.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
        numberToBan = m.message.extendedTextMessage.contextInfo.participant.split('@')[0];
    } else if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
        numberToBan = m.message.extendedTextMessage.contextInfo.mentionedJid[0].split('@')[0];
    }

    if (!numberToBan) {
        return PrexzyVilla.sendMessage(m.chat, { text: '⚠️ *Mention or reply to a user to ban.*' }, { quoted: m });
    }

    const targetJid = `${numberToBan}@s.whatsapp.net`;
    const ownerJid = `${config.owner}@s.whatsapp.net`;

    if (targetJid === ownerJid) {
        return PrexzyVilla.sendMessage(m.chat, { text: "❌ *You can't ban my owner!*" }, { quoted: m });
    }

    const banList = loadBanList();
    banList[numberToBan] = true;
    saveBanList(banList);

    return PrexzyVilla.sendMessage(m.chat, {
        text: `🚫 *User @${numberToBan} has been banned from sending messages.*`,
        contextInfo: { mentionedJid: [targetJid] }
    }, { quoted: m });
};

// Unban a user
const unbanUser = async (m, PrexzyVilla) => {
    if (!m.key.remoteJid.endsWith('@g.us')) return; // Ensure it's in a group

    let numberToUnban = '';
    if (m.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
        numberToUnban = m.message.extendedTextMessage.contextInfo.participant.split('@')[0];
    } else if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
        numberToUnban = m.message.extendedTextMessage.contextInfo.mentionedJid[0].split('@')[0];
    }

    if (!numberToUnban) {
        return PrexzyVilla.sendMessage(m.chat, { text: '⚠️ *Mention or reply to a user to unban.*' }, { quoted: m });
    }

    const targetJid = `${numberToUnban}@s.whatsapp.net`;
    const ownerJid = `${config.owner}@s.whatsapp.net`;

    if (targetJid === ownerJid) {
        return PrexzyVilla.sendMessage(m.chat, { text: "❌ *The owner is never banned!*" }, { quoted: m });
    }

    const banList = loadBanList();

    if (!banList[numberToUnban]) {
        return PrexzyVilla.sendMessage(m.chat, { text: `⚠️ *User @${numberToUnban} is not banned.*` }, { quoted: m });
    }

    delete banList[numberToUnban];
    saveBanList(banList);

    return PrexzyVilla.sendMessage(m.chat, {
        text: `✅ *User @${numberToUnban} has been unbanned and can send messages again.*`,
        contextInfo: { mentionedJid: [targetJid] }
    }, { quoted: m });
};

// Check messages & delete if sent by banned users
const checkBannedUsers = async (m, PrexzyVilla) => {
    const banList = loadBanList();
    const sender = m.sender.split('@')[0];

    if (banList[sender]) {
        try {
            await PrexzyVilla.sendMessage(m.chat, { delete: m.key });
        } catch (error) {
            console.error('Error deleting banned user message:', error);
        }
    }
};

module.exports = { banUser, unbanUser, checkBannedUsers };
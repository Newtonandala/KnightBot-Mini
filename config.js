/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOqOBD9L3nFugIqiFVTtcjgNw6f6rh1HwIEjEBAEkC85X/fwpnZmYfdu7NvSafr9Mnp0/0LkBxTtEYtmPwCRYlryFB3ZG2BwARMqyhCJeiBEDIIJuD1RWkXi2pHXXjZ1PWNzuVatASfbEhgEz+2NTurz2gu7b0ncO+BovJTHPwGsC2Y6p1WcbaO+uTYqudGUva+xB1ibsXFinHLlA2VqKZnzRO4d4gQl5jEenFCGSphukatCXH5PfrxdK4689FhmHCZYNwMMwxLeG68+OUKDaHKyFBcJjd/6w2S79HfmdygWO9NdzNeSx5p0ChwgkKK8rye7+brgXaEtmQwgZzjN/oUxwSFyxARhln7bd0tzbo846BQPYLOQrzEVT3M6shdVOlwbcRDQUvOZbs3pwv1e8Qt9WYkTsHCWeXBxaJaByiQ3SKQT/3rsngZTWdtsNC8084xvhI3yw+vJP9H90bdifmr3r+FNRJ9PRUbJ3F9PJdPo414W7SWcDT1w/KV4/Xv0R9MM41FaRK5HFflWqijMZzOHZte1q51jeqr6V7zQ8S1z80nfciq8ncsabErNsVCOXrTOovW/RzaLu86Qp/ZTnpmrtY4t1KH8WpXaXWpr5J0IF2uIzGtx69Uspl93DerXZRW+SrO+8dnbBw5zXp6/ChB7TIEE+HeAyWKMWUlZDgnXWwg9QAMawcFJWIPdYG95OPSliLG+q+aicaesOeSw/zFjZtIObipOWg8TJaGtaRPoAeKMg8QpShcYMrysjUQpTBGFEz+/NkDBF3ZW98e1YQeiHBJmUeqIs1h+NHUj0cYBHlFmNOSQOsOqAQT/jOMGMMkpp2MFYFlcMI10k6QUTCJYErR3x9EJQrfYz2QQsrMMi8WkJ7ABAjr4WkxBD1Q5lUHtyRR/pvGaCq/nFqx0wn5zqPLDhGDOKVdglHr17Gl6wZx6Zifz1U9VrVYBZ+8P/r/JvCzTARhzHs+Rpjfp763qsJ86ly3C36QbGQsmSlx2Tq3Vf7pH0A6SwfwmfO3TR8LiX85nGWuNfiLerUP4U7hz5K5n23YyvZXsnTzpydxx+kerxeh5KlmcvG3TlQ61nHM5ju1XM1n8GCL/Wnz1FULUY0D9LXY7DZy0VC8tbLIbbIdl/GH7ZipSX9zqwVt1ARGUPm61Vf1RVD7R2XfDqYzc3/ADRcet8I4qQ7W/hZQdfk8sxv35l5tdxq/OTN7jAQOwQSIo6E8GCmiMJaViST/QX80XWdhUfwgiIEeSB9pkjgUB7I4kpXBQBG7xC7+MWTp+3LDD/91yN01wuixKwjs6v13pTcNOk/y994XjPft8y9GmVrcSAmj7Ww+JDmbFXtB8wlUPeraynakccPqPDrysnPRrS2433/2QJFCFuVlBiYAkrDMcQje3Kp+joGLM0QZzAowEWRZVAaKLI7vfwGeSzlXOwcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  

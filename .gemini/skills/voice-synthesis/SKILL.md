---
name: voice-synthesis
description: Voice synthesis and audio processing expert for web applications
version: 1.0.0
author: Nhatlinh9898
tags: [voice, tts, audio, speech, synthesis, webaudio]
---

# Voice Synthesis Expert Skill

Expert in voice synthesis, text-to-speech technologies, and web audio processing for interactive applications.

## Capabilities

- Google Cloud Text-to-Speech API integration
- Web Speech API implementation
- Audio processing with Web Audio API
- Voice cloning and customization
- Real-time audio streaming
- Audio format conversion and optimization
- Voice emotion and tone control
- Multi-language voice synthesis

## Usage

Use this skill for:
- Implementing TTS functionality
- Creating voice interfaces
- Processing audio streams
- Optimizing audio performance
- Setting up voice authentication
- Building audio visualization

## Examples

```javascript
// Google TTS API integration
const textToSpeech = async (text, voice = 'en-US-Standard-A') => {
  const request = {
    input: { text: text },
    voice: { languageCode: 'en-US', name: voice },
    audioConfig: { audioEncoding: 'MP3' }
  };
  
  const response = await ttsClient.synthesizeSpeech(request);
  return response.audioContent;
};
```

## Project Context

This skill is optimized for the automatic-succotash project which includes:
- Google TTS API integration
- Voice generation for AI characters
- Real-time audio processing
- Web Audio API implementation
- Audio streaming and caching

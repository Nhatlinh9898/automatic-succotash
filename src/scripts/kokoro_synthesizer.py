#!/usr/bin/env python3
"""
Kokoro TTS Synthesizer Script
Dùng bởi voice server để tạo audio từ text
"""

import argparse
import json
import time
import sys
from pathlib import Path
from kokoro import KPipeline
import soundfile as sf

def main():
    parser = argparse.ArgumentParser(description='Kokoro TTS Synthesizer')
    parser.add_argument('--text', required=True, help='Text to synthesize')
    parser.add_argument('--voice', default='af_sarah', help='Voice to use')
    parser.add_argument('--speed', type=float, default=1.0, help='Speech speed')
    parser.add_argument('--output', required=True, help='Output file path')
    
    args = parser.parse_args()
    
    try:
        # Khởi tạo pipeline
        pipeline = KPipeline(lang_code='a', device='cpu')
        
        # Tạo audio
        start_time = time.time()
        generator = pipeline(args.text, voice=args.voice, speed=args.speed)
        
        # Lưu audio
        for i, (gs, ps, audio) in enumerate(generator):
            sf.write(args.output, audio, 24000)
            duration = len(audio) / 24000  # Tính duration
            break
        
        synthesis_time = time.time() - start_time
        
        # Trả về kết quả
        result = {
            success: True,
            output_file: args.output,
            duration: duration,
            synthesis_time: synthesis_time,
            text: args.text,
            voice: args.voice
        }
        
        print(json.dumps(result))
        
    except Exception as e:
        error_result = {
            success: False,
            error: str(e)
        }
        print(json.dumps(error_result))
        sys.exit(1)

if __name__ == "__main__":
    main()

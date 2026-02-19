#!/usr/bin/env python3
"""
Kokoro TTS Interactive Demo
Nhập text và tạo audio ngay lập tức!
"""

import torch
from kokoro import KPipeline
import soundfile as sf
import time
import os

def main():
    print("🎤 Kokoro TTS Interactive Demo")
    print("=" * 40)
    print("Nhập 'exit' để thoát")
    print("Nhập 'voices' để xem danh sách giọng")
    print("=" * 40)
    
    # Khởi tạo pipeline
    print("📦 Đang tải model...")
    pipeline = KPipeline(lang_code='a', device='cpu')
    print("✅ Model sẵn sàng!")
    
    # Danh sách giọng
    voices = ['af_sarah', 'af_nicole', 'af_sky', 'am_adam', 'am_michael']
    current_voice = 'af_sarah'
    
    while True:
        print(f"\n🎤 Giọng hiện tại: {current_voice}")
        text = input("📝 Nhập text: ").strip()
        
        if text.lower() == 'exit':
            print("👋 Tạm biệt!")
            break
        elif text.lower() == 'voices':
            print(f"\n🎭 Danh sách giọng:")
            for i, voice in enumerate(voices):
                marker = "👉" if voice == current_voice else "  "
                print(f"{marker} {i+1}. {voice}")
            
            choice = input("\nChọn giọng (1-5): ").strip()
            if choice.isdigit() and 1 <= int(choice) <= 5:
                current_voice = voices[int(choice)-1]
                print(f"✅ Đã chọn giọng: {current_voice}")
            continue
        elif not text:
            continue
        
        try:
            print(f"🎤 Đang tạo audio với giọng {current_voice}...")
            start_time = time.time()
            
            # Tạo audio
            generator = pipeline(text, voice=current_voice, speed=1.0)
            
            # Lưu file
            timestamp = int(time.time())
            output_file = f"voice_{timestamp}.wav"
            
            for i, (gs, ps, audio) in enumerate(generator):
                sf.write(output_file, audio, 24000)
                break
            
            gen_time = time.time() - start_time
            print(f"✅ Đã lưu: {output_file} ({gen_time:.2f}s)")
            
            # Hỏi có muốn phát không
            play = input("🔊 Phát audio? (y/n): ").strip().lower()
            if play == 'y':
                try:
                    os.startfile(output_file)
                except:
                    print("⚠️ Không thể phát audio tự động")
            
        except Exception as e:
            print(f"❌ Lỗi: {e}")

if __name__ == "__main__":
    main()

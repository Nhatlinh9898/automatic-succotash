#!/usr/bin/env python3
"""
Kokoro TTS Demo - Free Text-to-Speech
Cài đặt: pip install kokoro
"""

import torch
from kokoro import KPipeline
import soundfile as sf
import time

def main():
    print("🎤 Kokoro TTS Demo - Free Voice Generator")
    print("=" * 50)
    
    # Khởi tạo Kokoro pipeline
    print("📦 Đang tải model Kokoro...")
    start_time = time.time()
    
    try:
        pipeline = KPipeline(lang_code='a', device='cpu')  # 'a' = American English
        load_time = time.time() - start_time
        print(f"✅ Model đã tải xong trong {load_time:.2f} giây!")
        
        # Danh sách các giọng có sẵn
        voices = ['af_sarah', 'af_nicole', 'af_sky', 'am_adam', 'am_michael']
        print(f"\n🎭 Các giọng có sẵn: {', '.join(voices)}")
        
        # Text mẫu để test
        test_texts = [
            "Hello, this is Kokoro TTS speaking!",
            "Xin chào, tôi là Kokoro TTS!",
            "Welcome to the future of AI voice technology.",
            "This is a completely free and open source solution."
        ]
        
        print("\n🎯 Bắt đầu tạo audio...")
        
        for i, text in enumerate(test_texts):
            voice = voices[i % len(voices)]
            print(f"\n📝 Text: {text}")
            print(f"🎤 Giọng: {voice}")
            
            # Tạo audio
            start_time = time.time()
            generator = pipeline(text, voice=voice, speed=1.0)
            
            # Lưu audio file
            output_file = f"kokoro_output_{i+1}.wav"
            for i, (gs, ps, audio) in enumerate(generator):
                sf.write(output_file, audio, 24000)
                break  # Chỉ lấy segment đầu tiên
            
            gen_time = time.time() - start_time
            print(f"✅ Đã lưu: {output_file} ({gen_time:.2f} giây)")
        
        print("\n🎉 Hoàn thành! Kiểm tra các file audio đã tạo.")
        print("📁 Các file output:")
        for i in range(1, len(test_texts) + 1):
            print(f"   - kokoro_output_{i}.wav")
            
    except Exception as e:
        print(f"❌ Lỗi: {e}")
        print("\n💡 Gợi ý:")
        print("   - Kiểm tra kết nối internet")
        print("   - Thử lại sau vài giây")
        print("   - Đảm bảo đủ dung lượng đĩa")

if __name__ == "__main__":
    main()

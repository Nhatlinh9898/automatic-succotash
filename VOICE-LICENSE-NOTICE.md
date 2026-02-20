# Voice Generation License Notice

## PersonaPlex Model Licensing

### Governing Terms
Use of the PersonaPlex voice model in this project is governed by the **NVIDIA Open Model License Agreement**.

### Additional Terms
**CC-BY-4.0** license terms also apply to the PersonaPlex model.

### Required Attribution
When using the voice generation features, you must include the following citation:

```bibtex
@misc{roy2026personaplexvoicerolecontrol,
      title={PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models}, 
      author={Rajarshi Roy and Jonathan Raiman and Sang-gil Lee and Teodor-Dumitru Ene and Robert Kirby and Sungwon Kim and Jaehyeon Kim and Bryan Catanzaro},
      year={2026},
      eprint={2602.06053},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2602.06053}, 
}
```

### Compliance Requirements

1. **NVIDIA Open Model License Agreement**: You must comply with all terms of the NVIDIA Open Model License Agreement when using the PersonaPlex model.

2. **CC-BY-4.0 Attribution**: You must provide proper attribution to the original authors when using or modifying the voice generation components.

3. **Commercial Use**: Review the NVIDIA Open Model License Agreement for specific terms regarding commercial use.

4. **Modifications**: If you modify the voice generation components, you must clearly indicate the changes and maintain attribution to the original work.

### Implementation in This Project

The voice generation features are implemented in the following files:
- `src/components/VoiceGenerator.jsx` - Main voice generation React component
- `src/services/voiceService.js` - Voice synthesis service layer
- `src/server/voiceServer.js` - Voice generation API server
- `src/scripts/kokoro_synthesizer.py` - Python voice synthesis backend

### User Responsibilities

As a user of this project's voice generation features, you are responsible for:
1. Reading and complying with the NVIDIA Open Model License Agreement
2. Providing proper attribution when using the voice features
3. Ensuring your use case complies with both CC-BY-4.0 and NVIDIA Open Model License terms
4. Maintaining license notices in any distributed versions that include voice generation

### Questions

For questions about licensing:
- Review the full NVIDIA Open Model License Agreement
- Consult the CC-BY-4.0 license terms
- Check the project's main LICENSE file for additional context

### Disclaimer

This notice is provided for informational purposes and does not constitute legal advice. Users should consult with legal professionals for specific licensing questions.

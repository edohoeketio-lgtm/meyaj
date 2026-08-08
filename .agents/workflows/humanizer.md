---
description: Remove signs of AI-generated writing from text while strictly adhering to ASD-STE100 Simplified Technical English standards. Use when editing or reviewing text to make it sound more natural, human-written, unambiguous, and globally accessible.
---

1. Execute the humanizer skill: `@[/humanizer]`
2. The agent will read the provided text and strictly follow the formatting and styling pattern detection in its instructions.
3. **CRITICAL REQUIREMENT:** The agent MUST strictly enforce ASD-STE100 Simplified Technical English (STE) rules in the final output. This includes:
   - Using only restricted vocabulary (approved dictionary).
   - Enforcing "One Word, One Meaning".
   - Using active voice, short sentences (max 20-25 words), and simple verb tenses.
   - Using exactly one instruction per sentence.
4. The agent will output the revised text, the remaining tells, and the final "humanized" output that conforms to STE specs.

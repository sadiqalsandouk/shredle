import {
  RegExpMatcher,
  TextCensor,
  englishDataset,
  englishRecommendedTransformers,
} from "obscenity"

// Create a singleton matcher we can reuse
const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
})

// Create a censor for replacing text if needed
const censor = new TextCensor()

export function containsProfanity(text: string): boolean {
  return matcher.hasMatch(text)
}

export function getProfanityMatches(text: string) {
  return matcher.getAllMatches(text, true)
}

export function censorProfanity(text: string): string {
  const matches = matcher.getAllMatches(text)
  return censor.applyTo(text, matches)
}

// For validation in forms
export function validateUsername(username: string): {
  isValid: boolean
  error?: string
} {
  // Basic validation
  if (!username || username.trim().length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters" }
  }

  if (username.trim().length > 20) {
    return { isValid: false, error: "Name must be 20 characters or less" }
  }

  // Check for profanity
  if (containsProfanity(username)) {
    return { isValid: false, error: "Unable to use this name" }
  }

  // Check for impersonation attempts
  if (/^\d+$/.test(username)) {
    return { isValid: false, error: "Name cannot be only numbers" }
  }

  // Check for excessive special characters
  if (/[^\w\s]{3,}/.test(username)) {
    return { isValid: false, error: "Too many special characters" }
  }

  return { isValid: true }
}

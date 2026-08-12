import { APP_COPY } from '../copy';

describe('APP_COPY', () => {
  it('should have onboarding copy with Email/Google/Apple auth buttons', () => {
    expect(APP_COPY.onboarding.emailButton).toBeDefined();
    expect(APP_COPY.onboarding.googleButton).toBeDefined();
    expect(APP_COPY.onboarding.appleButton).toBeDefined();
  });

  it('should NOT have a LinkedIn SSO button (LinkedIn is verification only)', () => {
    expect(APP_COPY.onboarding).not.toHaveProperty('linkedinButton');
    expect(APP_COPY.onboarding.linkedinVerifyNudge).toBeDefined();
  });

  it('should have swipe deck empty state copy', () => {
    expect(APP_COPY.swipeDeck.emptyStateTitle).toBe('Radar Active');
  });

  it('should have 24-hour crucible warning copy', () => {
    expect(APP_COPY.chat.crucibleWarning).toBeDefined();
    expect(APP_COPY.chat.characterThrottle).toBeDefined();
  });

  it('should have profile and project copy sections', () => {
    expect(APP_COPY.profile).toBeDefined();
    expect(APP_COPY.project).toBeDefined();
  });
});

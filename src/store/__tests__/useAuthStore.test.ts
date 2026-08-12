import { useAuthStore } from '../useAuthStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    // Reset state between tests
    useAuthStore.setState({ isAuthenticated: false, userRole: null });
  });

  it('should start with unauthenticated state', () => {
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.userRole).toBeNull();
  });

  it('should login as founder', () => {
    useAuthStore.getState().login('founder');
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(true);
    expect(state.userRole).toBe('founder');
  });

  it('should login as freelancer', () => {
    useAuthStore.getState().login('freelancer');
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(true);
    expect(state.userRole).toBe('freelancer');
  });

  it('should logout and reset state', () => {
    useAuthStore.getState().login('founder');
    useAuthStore.getState().logout();
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.userRole).toBeNull();
  });
});

// stores/userStore.js
export const useUserStore = defineStore('user', {
    state: () => ({
      user: null,  // ذخیره اطلاعات کاربر
      token: null, // ذخیره توکن JWT
    }),
    actions: {
      setUser(userData) {
        this.user = userData
      },
      setToken(token) {
        this.token = token
      },
      logout() {
        this.user = null;
        this.token = null;
        localStorage.removeItem('token'); // Remove token from localStorage
        localStorage.removeItem('user'); // Remove token from localStorage
        localStorage.removeItem('userName'); // Remove token from localStorage
        localStorage.removeItem('userMobile'); // Remove token from localStorage
  
        // Redirect to login page after logout
        const router = useRouter();
        router.push('/auth/login');
      },
      
    },
    getters: {
      isAuthenticated: (state) => !!state.token, // چک کردن اینکه کاربر لاگین کرده یا خیر
    },
    
  })
  
// stores/userStore.js
export const useTableStore = defineStore('table', {
    state: () => ({
      refresh: false 
      
    }),
    actions: {
      setRefreshTable(data) {
        this.refresh = data
      },
      
       
      
    },
    // getters: {
    //   isAuthenticated: (state) => !!state.token, // چک کردن اینکه کاربر لاگین کرده یا خیر
    // },
    
  })
  
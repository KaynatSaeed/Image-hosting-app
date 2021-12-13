import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex ,axios)



//forpass
//    JJ5O5Pk@beGn  
export default new Vuex.Store({
  state: {
    users: [],
    loginUser:[],
    Snackbar:false,
    snackbarErrorMsg:"",
  },
  mutations: {
    SET_USER(state,users){
      state.users = users; 
    },
    LOGIN_USER(state,loginUser){
      state.loginUser = loginUser; 
    },
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_ERRRORMSG(state,snackbarErrorMsg){
      state.snackbarErrorMsg = snackbarErrorMsg;
    },
  },
  actions: {
    updateSnackBarStatus({commit}){
     commit("SET_SNACKBAR",false);
    },
    //====================REGISTER-USER==========================//
    loadUser({ commit }, payload) {
      console.log(commit);
      console.log (payload);
      //creq=====================
      axios.post("http://192.168.88.37:8080/user/register",payload).then((response) => {
            let data = response.data;
            console.log(response);
            commit('SET_USER', data)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',response.data.message)
           


          })
          .catch(error => {
            console.log(error.response)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
          })
    },
     //====================LOGIN-USER==========================//

    loginUser({ commit }, payload) {
      console.log(commit);
      console.log (payload);
      axios.post("http://192.168.88.37:8080/user/UserLogin",payload).then((response) => {
            let data = response.data;
            console.log(response.data.message);
            console.log(response.data);
            commit('LOGIN_USER', data)
            localStorage.setItem("currentUser", JSON.stringify(response.data.data.User_data));
            localStorage.setItem("currentUsertoken", JSON.stringify(response.data.data.Authentication));
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',response.data.message)
            router.push({ name: "profile" });

          })
          .catch(error => {
            console.log(error.response)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
          })
    },
        //====================UPDATE-PROFILE==========================//
    updateProfile({ commit }, payload) {
      console.log(commit);
      console.log(payload);



      const currentUserToken = JSON.parse(localStorage.getItem("currentUserToken"));
      console.log(currentUserToken);

      const currentUserId = JSON.parse(localStorage.getItem("currentUser")).id;
      console.log(currentUserId);

      const headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + currentUserToken,
          }
          // call sign up api here
      axios.put(`http://192.168.88.37:8080/user/updateUser/${currentUserId}`, payload, {
              headers: headers
          })
          .then(function(response) {
              console.log(response);
          })
          .catch(function(error) {
              console.log(error.response);
              // commit("SET_SNACKBAR", true);
              // commit("SET_SNACKBARMSG_ERRORMSG", error.response.status);
          });
  },
    //====================FORGET==========================//

    forgetData({commit},payload){

      console.log(commit);

      console.log(payload);

      //signup api calling

      //creq

      axios.post("http://192.168.88.37:8080/user/forgotPassword",payload)

      .then(function(response){

        console.log(response);

      })

      .catch(function(error){

        console.log(error);


      });    }
  },
  getters:{
      getSnackbarStutes(state){
      return state.Snackbar;
      },
      getSnackbarErrorMsg(state){
        return state.snackbarErrorMsg;
      }
  },
  modules: {
  }
})
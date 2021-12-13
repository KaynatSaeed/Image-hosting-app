const   emailRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 30 || 'Max 30 characters',
    value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Invalid e-mail.'
    }, 
  ]
  const   UsernameRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 20 || 'Max 20 characters',
    value => {
      const pattern =/^(([A-Za-z-9._-]{3,20}))$/
      return pattern.test(value) || 'Invalid Name' 
    },
  ]
  const   firstnameRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 10 || 'Max 10 characters',
  ]
  const   lastnameRule =  [
    value => !!value || 'This field is required.',
    value => (value || '').length <= 10 || 'Max 10 characters',
  ]
  const   passwordRule =  [
    value => !!value || 'Password is required',
    value => (value && value.length >= 8) || 'Password must be 8  characters or more!',
  ]
  // const password_confirmation=  [
  //   value => !!value || 'Password is required',
  // ]

  
  const   ageRules =  [
    value => !!value || 'This field is required.',
    value => (value || '') >= 12 || 'You are Under 12 age',
  ]  
  const   imageRules =  [
    // value => !!value || 'This field is required.',
  ]
  export {
    UsernameRule,
    emailRule,
    passwordRule,
    ageRules,
    imageRules,
    // password_confirmation
  }
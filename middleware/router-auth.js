export default function({ store, redirect, route }) {
  if (isLogin(store) && route.name === '/user/login') {
    console.log('user is authenitcated')
    return redirect('/user/konto')
  }

  if (!isLogin(store) && isAdminRoute(route)) {
    console.log('user is NOT authenitcated')
    return redirect('/user/login')
  }
}
const isLogin = store => {
  return store && store.state && store.state.user
}

const isAdminRoute = route => {
  if (route.matched.some(record => record.path === '/user/konto')) {
    return true
  }
}

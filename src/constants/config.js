export const defaultMenuType = 'menu-default' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const defaultStartPath = '/app/dashboards/default'
export const searchPath = '/app/pages/miscellaneous/search'

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'es'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'en', name: 'English LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English RTL', direction: 'rtl' }
]

export const firebaseConfig = {
  apiKey: 'AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg',
  authDomain: 'gogo-react-login.firebaseapp.com',
  databaseURL: 'https://gogo-react-login.firebaseio.com',
  projectId: 'gogo-react-login',
  storageBucket: 'gogo-react-login.appspot.com',
  messagingSenderId: '216495999563'
}

export const apiUrl = 'https://api.coloredstrategies.com'

export const currentUser = {
  id: 1,
  title: 'Admin',
  img: '/assets/img/profile-pic-2.jpg',
  date: 'Last seen today 15:24'
}

export const isDemo = true
export const themeRadiusStorageKey = 'theme_radius'
export const defaultColor = 'light.blue'
export const colors = [
  'light.purple',
  'dark.purple',
  'light.blue',
  'dark.blue',
  'light.green',
  'dark.green',
  'light.orange',
  'dark.orange',
  'light.red',
  'dark.red'
]

import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
  NavigationNavigateActionPayload
} from 'react-navigation'

let _navigator: NavigationContainerComponent

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent | null): void {
  _navigator = navigatorRef || _navigator
}

function isNavigatePayload(obj: any): obj is NavigationNavigateActionPayload {
  return obj.key || obj.routeName 
}

function navigate(routeNameOrOptions: string | NavigationNavigateActionPayload, params?: NavigationParams): void {
  
  let options: NavigationNavigateActionPayload = {
    routeName: ''
  }
  if (isNavigatePayload(routeNameOrOptions)) {
    options = routeNameOrOptions
  }
  else {
    options = {
      routeName: routeNameOrOptions
    }
  }
  if (params) {
    options.params = params
  }
  
  _navigator.dispatch(
    NavigationActions.navigate(options)
  )
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
}
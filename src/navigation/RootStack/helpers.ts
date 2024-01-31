/**
 * @file navigationRef
 *
 * https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */

import { createNavigationContainerRef } from "@react-navigation/native";

import { type RootStackParamList } from "./RootNavigation.types";

export const navigationContainerRef =
  createNavigationContainerRef<RootStackParamList>();

import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { User } from "../types/types"

export const login = atomWithStorage<boolean>("29hfowey",false)
export const token = atomWithStorage<string|undefined>("asd823rb",undefined);
export const userAtom = atomWithStorage<User|undefined>("18dyahs2",undefined)
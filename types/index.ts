export interface Language {
  code: string
  name: string
  flag: string
  dir: "ltr" | "rtl"
}

export interface Translation {
  [key: string]: string | Translation
}

export interface Translations {
  [languageCode: string]: Translation
}

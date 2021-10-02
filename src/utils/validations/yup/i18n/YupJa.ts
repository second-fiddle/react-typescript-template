/* eslint-disable */
import * as yup from 'yup';

export const mixed = {
  default: ({ path }: any): string => `${path ? `${path}の` : ''}値が不正です`,
  required: ({ path }: any): string => `${path ? `${path}は` : ''}必須です`,
  oneOf: ({ path, values }: any): string =>
    `${path ? `${path}には` : ''}以下のものが入力できます: ${values}`,
  notOneOf: ({ path, values }: any): string =>
    `${path ? `${path}には` : ''}以下のものは入力できません: ${values}`,
  // From user's perspective, defined and default is essentially same.
  defined: ({ path }: any): string => `${path ? `${path}は` : ''}必須です`,
};

export const string = {
  length: ({ path, length }: any): string =>
    `${path ? `${path}は` : ''}${length}文字である必要があります`,
  min: ({ path, min }: any): string =>
    `${path ? `${path}は` : ''}${min}文字以上のみ入力できます`,
  max: ({ path, max }: any): string =>
    `${path ? `${path}は` : ''}${max}文字まで入力できます`,
  matches: ({ path, regex }: any): string =>
    `${path ? `${path}は` : ''}以下の形式である必要があります: ${regex}`,
  email: ({ path }: any): string =>
    `${path ? `${path}は` : ''}正しいメールアドレスではありません`,
  url: ({ path }: any): string =>
    `${path ? `${path}は` : ''}正しいURLではありません`,
  uuid: ({ path }: any): string =>
    `${path ? `${path}は` : ''}正しいUUIDではありません`,
  trim: ({ path }: any): string =>
    `${path ? `${path}の` : ''}前後に空白は含められません`,
  lowercase: ({ path }: any): string =>
    `${path ? `${path}には` : ''}小文字のみ入力できます`,
  uppercase: ({ path }: any): string =>
    `${path ? `${path}には` : ''}大文字のみ入力できます`,
};

export const number = {
  min: ({ path, min }: any): string =>
    `${path ? `${path}には` : ''}${min}以上の数のみ入力可能です`,
  max: ({ path, max }: any): string =>
    `${path ? `${path}には` : ''}${max}以下の数のみ入力可能です`,
  lessThan: ({ path, less }: any): string =>
    `${path ? `${path}には` : ''}${less}未満の数のみ入力可能です`,
  moreThan: ({ path, more }: any): string =>
    `${path ? `${path}には` : ''}${more}より大きい数のみ入力可能です`,
  notEqual: ({ path, notEqual }: any): string =>
    `${path ? `${path}は` : ''}${notEqual}以外の数である必要があります`,
  positive: ({ path }: any): string =>
    `${path ? `${path}には` : ''}正の数のみ入力できます`,
  negative: ({ path }: any): string =>
    `${path ? `${path}には` : ''}負の数のみ入力できます`,
  integer: ({ path }: any): string =>
    `${path ? `${path}には` : ''}整数のみ入力可能です`,
};

export const date = {
  min: ({ path, min }: any): string =>
    `${path ? `${path}には` : ''}${min}以降の日付のみ入力可能です`,
  max: ({ path, max }: any): string =>
    `${path ? `${path}には` : ''}${max}以前の日付のみ入力可能です`,
};
export const { object } = yup;
export const array = {
  min: ({ path, min }: any): string =>
    `${path ? `${path}は` : ''}${min}つ以上必要です`,
  max: ({ path, max }: any): string =>
    `${path ? `${path}は` : ''}${max}つまで入力できます`,
};

const ja = {
  mixed,
  string,
  number,
  date,
  object,
  array,
};

yup.setLocale(ja);

export const YupJa = yup;

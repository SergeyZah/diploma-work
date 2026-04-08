import {
  getNameExercise,
  getNameWorkaut,
  getQuestionExercise,
  getString,
  getUserNameByEmail,
} from './croppingLines';

describe('getUserNameByEmail', () => {
  it('Email состоит из букв', () => {
    expect(getUserNameByEmail('sdcjai@yandex.ru')).toBe('sdcjai');
  });
  it('Email состоит из чисел', () => {
    expect(getUserNameByEmail('14332542@mail.ru')).toBe('14332542');
  });
  it('Email состоит из букв и чисел', () => {
    expect(getUserNameByEmail('f6f33bu9@gmail.ru')).toBe('f6f33bu9');
  });
  it('Email состоит из буквб чисел и знаков', () => {
    expect(getUserNameByEmail('fjh!74^@rumbler.com')).toBe('fjh!74^');
  });
});

describe('getNameWorkaut', () => {
  it('Имя в первом секторе строчки', () => {
    expect(
      getNameWorkaut(
        'Асаны стоя / Йога на каждый день / 3 день / Алексей Казубский',
      ),
    ).toBe('Асаны стоя ');
  });
});

describe('getString', () => {
  it('Название тренировки с днями во втором и третьем секторе строчки', () => {
    expect(
      getString(
        'Асаны стоя / Йога на каждый день / 3 день / Алексей Казубский / Асаны стоя',
        'Асаны стоя',
        2,
      ),
    ).toBe(' Йога на каждый день / 3 день ');
  });
  it('Название тренировки, если нет деления слешами', () => {
    expect(
      getString(
        'Асаны стоя Йога на каждый день 3 день Алексей Казубский Асаны стоя',
        'Асаны стоя',
        2,
      ),
    ).toBe('Асаны стоя / 3 день');
  });
});

describe('getNameExercise', () => {
  it('Название тренировки без количества повторений', () => {
    expect(getNameExercise('Наклон к правой ноге (10 повторений)')).toBe(
      'Наклон к правой ноге ',
    );
  });
});

describe('getQuestionExercise', () => {
  it('Фрагмент вопроса строчными буквами', () => {
    expect(getQuestionExercise('Наклон к правой ноге (10 повторений)')).toBe(
      'наклон к правой ноге ',
    );
  });
});

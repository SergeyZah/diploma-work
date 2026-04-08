import { FetchRightCover } from './FetchRightCover';

describe('FetchRightCover', () => {
  it('Объект для правильной реализации цвета страницы курса', () => {
    expect(FetchRightCover('BodyFlex')).toStrictEqual({
      courseImageSrc: '/img/bodyflex.png',
      courseImageSrcLong: '/img/bodyflexLong.png',
      courseImageSrcMobile: '/img/bodyflexMobile.png',
      color: 'rgba(125, 69, 140, 1)',
    });
  });
});

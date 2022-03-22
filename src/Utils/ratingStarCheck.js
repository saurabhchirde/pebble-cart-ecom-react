const ratingStarCheck = (rating) => {
  let filledStar;

  if (rating >= 4.7) {
    filledStar = 5;
  } else if (rating >= 3.7) {
    if (rating > 4.3 && rating < 4.7) {
      filledStar = 4.5;
    } else {
      filledStar = 4;
    }
  } else if (rating >= 2.7) {
    if (rating > 3.3 && rating < 3.7) {
      filledStar = 3.5;
    } else {
      filledStar = 3;
    }
  } else if (rating >= 1.7) {
    if (rating > 2.3 && rating < 2.7) {
      filledStar = 2.5;
    } else {
      filledStar = 2;
    }
  } else {
    if (rating > 1.3 && rating < 1.7) {
      filledStar = 1.5;
    } else {
      filledStar = 1;
    }
  }
  return filledStar;
};
export { ratingStarCheck };

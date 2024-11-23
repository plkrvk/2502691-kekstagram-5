const MIN = 25;
const MAX = 100;
const STEP = 25;

const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const getValue = (percent) => {
  if (percent[percent.length - 1] === '%') {
    return +percent.slice(0, percent.length - 1);
  } else {
    return +percent;
  }
};

const zoomImage = (value) => {
  scaleControlValue.value = `${value}%`;
  imgUploadPreview.style = `transform: scale(${value / 100})`;
};

const zoomIn = () => {
  let value = getValue(scaleControlValue.value) - STEP;

  if (value < MIN) {
    value = MIN;
  }

  zoomImage(value);
};

const zoomOut = () => {
  let value = getValue(scaleControlValue.value) + STEP;

  if (value > MAX) {
    value = MAX;
  }

  zoomImage(value);
};

export { zoomIn, zoomOut };

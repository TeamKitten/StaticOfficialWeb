const resizeMAR = (
  originWidth: number,
  originHeight: number,
  resizeNumber: number,
  resizeMove?: string,
  otherSideNumber?: number
): { width: number; height: number } => {
  if (!originWidth || !originHeight || !resizeNumber) return null;
  if (!resizeMove) resizeMove = 'width';
  let result: { width: number; height: number };
  if (
    String(originWidth).match(/^[0-9]+$/) &&
    String(originHeight).match(/^[0-9]+$/) &&
    String(resizeNumber).match(/^[0-9]+$/) &&
    resizeMove.match(/^(width|height)$/)
  ) {
    let newWidth = 0;
    let newHeight = 0;
    let reResizeMove = '';
    if (resizeMove === 'width') {
      newHeight = (resizeNumber * originHeight) / originWidth;
      newWidth = (newHeight * originWidth) / originHeight;
      reResizeMove = 'height';
    } else {
      newWidth = (resizeNumber * originWidth) / originHeight;
      newHeight = (newWidth * originHeight) / originWidth;
      reResizeMove = 'width';
    }
    if (
      otherSideNumber &&
      String(otherSideNumber).match(/^([0-9]+|auto)$/) &&
      newHeight > otherSideNumber
    ) {
      const reResult = resizeMAR(
        newWidth,
        newHeight,
        otherSideNumber,
        reResizeMove
      );
      if (reResult) result = reResult;
    } else {
      result = {
        width: newWidth,
        height: newHeight,
      };
    }
  }
  return result;
};

export default resizeMAR;

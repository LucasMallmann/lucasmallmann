interface SliceByWordPayload {
  content: string;
  length: number;
  skipEllipses?: boolean;
}

/**
 * @function sliceByWord Cut a strin by the length, without breaking any word
 * @param {Object}  payload
 * @param {String}  payload.content Content to split
 * @param {Number}  payload.length Where to split the content
 * @param {Boolean} [payload.skipEllipses=false] Concat or not the ellipsis in the trimmed content
 */
export const sliceByWord = ({
  content,
  length,
  skipEllipses = false,
}: SliceByWordPayload): string => {
  if (content.length < length) {
    return content;
  }

  let trimmed = content.slice(0, length);
  trimmed = trimmed.slice(
    0,
    Math.min(trimmed.length, trimmed.lastIndexOf(' '))
  );
  return skipEllipses ? trimmed : `${trimmed}…`;
};

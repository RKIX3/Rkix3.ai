export function formatCount(value) {
  return new Intl.NumberFormat('vi-VN').format(value);
}

export function formatStatus(status) {
  return status.replaceAll('-', ' ').toUpperCase();
}

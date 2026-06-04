export async function generateOfflineBlueprint(prompt) {
  return {
    title: 'RKIX3 Offline Blueprint',
    prompt,
    steps: ['Phân tích yêu cầu', 'Chọn page/module', 'Sinh component', 'Kiểm tra deploy']
  };
}

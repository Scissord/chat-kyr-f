// Функция для безопасного парсинга JSON
export const parseJson = (data: string | null) => {
  if (!data) {
    // console.error("No data provided for JSON parsing.");
    return null;
  }

  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Error parsing JSON:", e, "Data:", data);
    return null; // Или пустой объект
  }
}
export async function getSentos(queryParams: {}) {
  const query = new URLSearchParams(queryParams);
  const res = await fetch(`http://127.0.0.1:8000/api/sentos/?${query}`);
  if (!res.ok) {
    throw new Error("銭湯一覧取得に失敗しました");
  }

  const data = await res.json();
  return data.sentos;
}

// export async function getAvailableRecordClasses(
// ): {
//   let url = "/phr/schema";
//   const req = await api(url, {
//     receivedDataChecker: z.array(recordClassChecker),
//     headers,
//   });
//
//   if (req.success) {
//     printAllAvailableFieldNames(req.data);
//     return req.data;
//   } else {
//     logError(req);
//     return [];
//   }
// }

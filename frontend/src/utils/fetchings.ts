export type Sento = {
  id: string;
  name: string;
  nearest_station: string;
  walking_time: number;
  address: string;
};

export async function getSentos(params = {}): Promise<Sento[]> {
  const query = new URLSearchParams(params).toString();
  const url = `http://127.0.0.1:8000/api/sentos/${query ? `?${query}` : ''}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("銭湯一覧取得に失敗しました");
  }

  const data = await res.json();
  return data.sentos
}

export async function getUserMissions(sentoId: string) {
  const url = `http://127.0.0.1:8000/api/user/missions/sentos/${sentoId}/`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Token e5fadbe4e1d2108d8396ea715c4157cfcbb0e509',
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error("ユーザクーポンの取得に失敗しました");
  }

  const data = await res.json();
  return data.userMissions;
}



export async function registerUser(formData: { email: string; password1: string; password2: string }) {
  const res = await fetch('http://127.0.0.1:8000/api/auth/registration/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error('ユーザー登録に失敗しました');
  }

  const data = await res.json();
  return data;
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

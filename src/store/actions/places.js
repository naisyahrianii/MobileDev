import { ADD_PLACE, DELETE_PLACE, CREATE_DATA } from './actionTypes'

export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}

export const createData = (items) => {
    var arrData = []
        var rawData = items.val()

        Object.keys(rawData).forEach(id => {
            arrData.push({
                key: id,
                value: rawData[id].name,
                usia: rawData[id].usia,
	            jabatan: rawData[id].jabatan,
                image: {
                    uri: "https://ae01.alicdn.com/kf/HTB1EMsmB49YBuNjy0Ffq6xIsVXaO/Kucing-Muda-Mengambil-Gambar-Kucing-Lucu-Kuning-Lingkaran-Hewan-Peliharaan-Bunga-Matahari-Kucing-Tutup-Kepala-Pakaian.jpg"
                }
            })
        })

    return {
        type: CREATE_DATA,
        payload: arrData
    }
}






















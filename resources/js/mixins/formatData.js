export default {
    methods: {
        formatData(data, parameter) {
            if (typeof data === 'object') {
                if (parameter.slice(-1) === 's') {
                    let result = '';
                    data.forEach(element => {
                        result += element.name + ', ';
                    })
                    return result.substring(0, result.length - 2);
                }
                if (data === null) {
                    return null;
                } else {
                    return data.name;
                }
            } else if (parameter.includes('date')) {
                let date = new Date(data);
                return date.toLocaleString('ru-RU', {day: '2-digit', month: '2-digit', year: '2-digit'});
            } else {
                return data;
            }
        }
    }
}

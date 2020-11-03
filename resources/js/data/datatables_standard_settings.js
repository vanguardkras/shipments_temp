export default {
    info: false,
    language: {
        paginate: {
            previous: "<i class='uil uil-angle-left'>",
            next: "<i class='uil uil-angle-right'>"
        },
        search: "Найти:",
        lengthMenu: "Показать _MENU_ записей",
        emptyTable: "В этой категории нет данных",
        zeroRecords: "Нет совпадающих результатов"
    },
    drawCallback: function () {
        $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
    }
}

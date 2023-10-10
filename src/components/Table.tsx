import TableRow from "./TableRow";

function Table() {
    return (
        <div className="table_container">
            <div className="row head">
                <div className="col one"></div>
                <div className="col two"></div>
                <div className="col three"><p>Бесплатные сервера</p></div>
                <div className="col four"><p>Подписочный сервер</p></div>
            </div>
            <TableRow
                img="Часы1.png"
                title="Игровое время"
                countFree="-"
                countPay="30"
            />
            <TableRow
                img="ТУЛБОКС1.png"
                title="Запечатанный набор инструментов"
                countFree="1"
                countPay="1"
            />
            <TableRow
                img="хрупкая1.png"
                title="Хрупкая чистая руна 10-й ступени"
                countFree="1"
                countPay="-"
            />
            <TableRow
                img="бол.png"
                title="Большой символ изобилия творца"
                countFree="10"
                countPay="-"
            />
            <TableRow
                img="мана1.png"
                title="Мана-батарея"
                countFree="-"
                countPay="20"
            />
            <TableRow
                img="модуль1.png"
                title="Модуль памяти"
                countFree="-"
                countPay="10"
            />
            <TableRow
                img="вито1.png"
                title="Помощник Вито"
                countFree="1"
                countPay="1"
            />
        </div>
    );
}

export default Table;

type Props = {
    img: string;
    title: string;
    countFree: string;
    countPay: string;
};

const TableRow: React.FC<Props> = ({ img, title, countFree, countPay }) => {
    return (
        <div className="row body">
            <div className="col one"><p><img src={require(`../img/${img}`)} alt="" /></p></div>
            <div className="col two"><p>{title}</p></div>
            <div className="col three"><p>{countFree}</p></div>
            <div className="col four"><p>{countPay}</p></div>
        </div>
    );
};

export default TableRow;

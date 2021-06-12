import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productListSelector } from '../../store/products/selectors'

const ProductList = () => {
    const productList = useSelector(productListSelector)
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Listado Producto
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products/create">Nuevo</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        {productList.length > 0 ? (<table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Color</th>
                                    <th className="text-end">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map((u: any) => (
                                    <tr key={u.id}>
                                        <td>
                                            <div className="badge bg-dark">
                                                {u.id}
                                            </div>
                                        </td>
                                        <td>{u.name}</td>
                                        <td>{u.description}</td>
                                        <td>{u.price}</td>
                                        <td>{u.color}</td>
                                        <td className="text-end">
                                            <div className="btn-group">
                                                <Link
                                                    className="btn btn-sm btn-primary"
                                                    to={`/products/detail/${u.id}`}
                                                >Detalle</Link>
                                                <Link
                                                    className="btn btn-sm btn-primary"
                                                    to={`/products/update/${u.id}`}
                                                >Actualizar</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>) : (
                                <div className="alert alert-danger">
                                    No existen elementos
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image
} from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {

    let { id } = useParams() // parametreleri obje olarak döndürür.

    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService();
        productService.getById(id).then(result => setProduct(result.data))
    }, [])

    return (
        <div>
            {id}
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <CardHeader>{product.title}</CardHeader>
                        <CardMeta>{product.body}</CardMeta>
                        <CardDescription>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </CardDescription>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

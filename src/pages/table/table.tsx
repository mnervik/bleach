import { useState, useEffect } from 'react'

import { Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'

interface IImage {
    label: string
    fname: string
}

const TablePage = () => {
    const [images, setImages] = useState<IImage[]>([])

    const [sorted, setSorted] = useState(false)

    useEffect(() => {
        setImages([
            {
                label: '2017',
                fname: '1007-25e8d88a-3819-4fd4-bd03-80c4c8b5efcc.png',
            },
            {
                label: '2018',
                fname: '1010-5dd71993-d286-4978-a5a1-e3dfe59f2e35.png',
            },
        ])
    }, [])

    const sortName = () => {
        setImages(
            [...images].sort((a, b) => {
                if (!sorted) {
                    return b.label.toLowerCase().localeCompare(a.label.toLowerCase())
                }

                return a.label.toLowerCase().localeCompare(b.label.toLowerCase())
            })
        )

        setSorted(!sorted)
    }

    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ICON</TableCell>
                            <TableCell onClick={sortName}>Name</TableCell>
                            <TableCell>AKT</TableCell>
                            <TableCell>SP</TableCell>
                            <TableCell>1X</TableCell>
                            <TableCell>2X</TableCell>
                            <TableCell>3X</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {images.map((image) => (
                            <TableItem image={image} key={image.fname} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

const TableItem = ({ image }: { image: IImage }) => {
    const [atk, setAtk] = useState(0)
    const [sp, setSp] = useState(0)

    const atkHandler = () => {
        setAtk(atk + 1)
    }

    const spHandler = () => {
        setSp(sp + 1)
    }

    return (
        <TableRow>
            <TableCell>
                <img src={`img/${image.fname}`} alt={image.label} />
            </TableCell>
            <TableCell>{image.label}</TableCell>
            <TableCell onClick={atkHandler}>{atk}</TableCell>
            <TableCell onClick={spHandler}>{sp}</TableCell>
            <TableCell>0%</TableCell>
            <TableCell>0%</TableCell>
            <TableCell>0%</TableCell>
        </TableRow>
    )
}

export default TablePage

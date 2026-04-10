import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Productdetails = () => {
  const [theProduct, setTheProduct] = useState(null)
  const parameter = useParams()

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${parameter.id}`)
      .then(res => setTheProduct(res.data))
  }, [])

  if (!theProduct) return <p>Loading...</p>

  const discountedPrice = (theProduct.price * (1 - theProduct.discountPercentage / 100)).toFixed(2)

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif', padding: '20px' }}>

      {/* Image & Title */}
      <h1>{theProduct.title}</h1>
      <img style={{ width: '250px', borderRadius: '8px' }} src={theProduct.images[0]} alt={theProduct.title} />

      {/* Pricing */}
      <div style={{ marginTop: '16px' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#e53935' }}>${discountedPrice}</span>
        <span style={{ marginLeft: '10px', textDecoration: 'line-through', color: '#999' }}>${theProduct.price}</span>
        <span style={{ marginLeft: '10px', color: 'green' }}>({theProduct.discountPercentage}% OFF)</span>
      </div>

      {/* Description */}
      <p style={{ marginTop: '12px', color: '#555' }}>{theProduct.description}</p>

      {/* Details */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
        <tbody>
          {[
            ['Brand', theProduct.brand],
            ['Category', theProduct.category],
            ['SKU', theProduct.sku],
            ['Rating', `⭐ ${theProduct.rating} / 5`],
            ['Stock', `${theProduct.stock} units`],
            ['Availability', theProduct.availabilityStatus],
            ['Minimum Order', theProduct.minimumOrderQuantity],
            ['Weight', `${theProduct.weight} kg`],
            ['Dimensions (W×H×D)', `${theProduct.dimensions?.width} × ${theProduct.dimensions?.height} × ${theProduct.dimensions?.depth} cm`],
            ['Warranty', theProduct.warrantyInformation],
            ['Shipping', theProduct.shippingInformation],
            ['Return Policy', theProduct.returnPolicy],
            ['Tags', theProduct.tags?.join(', ')],
          ].map(([label, value]) => (
            <tr key={label} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px', fontWeight: 'bold', color: '#333', width: '40%' }}>{label}</td>
              <td style={{ padding: '8px', color: '#555' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Reviews */}
      <h3 style={{ marginTop: '24px' }}>Customer Reviews</h3>
      {theProduct.reviews?.map((review, index) => (
        <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px', marginBottom: '10px' }}>
          <strong>{review.reviewerName}</strong>
          <span style={{ marginLeft: '10px', color: '#f5a623' }}>{'⭐'.repeat(review.rating)}</span>
          <p style={{ margin: '6px 0', color: '#555' }}>{review.comment}</p>
          <small style={{ color: '#999' }}>{new Date(review.date).toLocaleDateString()}</small>
        </div>
      ))}

    </div>
  )
}

export default Productdetails
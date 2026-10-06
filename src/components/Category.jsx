import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { getCatalogProducts, getNavGroups, getProductImage, productInGroup } from '@/lib/catalog'
import { Reveal, staggerContainer, fadeUpItem } from '../lib/motion'

// Hand-picked cover shots; anything not listed falls back to the group's first product.
const COVERS = {
  1: ['/video_laryngoscope.png', '/cpap.png', '/breathing_circuit.png'],
  4: ['/infusion_pump.png', '/syringe_pump.png', '/central_venous_catheter.png'],
  8: ['/isolation_gown.png', '/medical_protective_face_shield.png', '/sterile_coverall.png'],
  9: ['/donut_head_pad.png', '/horseshoe_head_pad.png', '/heel_pads.png'],
  15: ['/suction_toothbrush.png', '/body-wipes.jpeg', '/cannula_cleaning_brushes.png']
}

function Category() {
  const groups = useMemo(() => {
    const products = getCatalogProducts()
    return getNavGroups().map((group) => {
      const inGroup = products.filter((p) => productInGroup(p, group.id))
      const covers = COVERS[group.id] || inGroup.slice(0, 3).map(getProductImage)
      return { ...group, count: inGroup.length, covers }
    })
  }, [])

  return (
    <section className="section bg-gray-50" aria-labelledby="categories-title">
      <div className="container-page">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Product range</span>
            <h2 id="categories-title" className="heading-lg mt-3">
              Everything the ward and theatre need, from one supplier
            </h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-primary hover:text-primary-700">
            View full catalogue →
          </Link>
        </Reveal>

        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {groups.map((group) => (
            <motion.li key={group.id} variants={fadeUpItem}>
              <Link
                to={`/products?groupId=${group.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_12px_32px_-16px_rgba(15,23,42,0.22)]"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center gap-2 overflow-hidden bg-white px-6">
                  {group.covers.slice(0, 3).map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className={`object-contain transition-transform duration-500 ${
                        i === 0 ? 'z-10 h-[78%] w-[46%] group-hover:scale-105' : 'h-[52%] w-[26%] opacity-80 group-hover:opacity-100'
                      } ${i === 1 ? '-order-1' : ''}`}
                    />
                  ))}
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 border-t border-gray-100 p-5">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{group.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{group.description}</p>
                    <p className="mt-3 text-xs font-medium text-gray-400">{group.count} products</p>
                  </div>
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Category

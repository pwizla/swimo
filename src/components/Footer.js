import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      Tout
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_UNCHECKED">
      Ajoutées
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_CHECKED">
      Banque
    </FilterLink>
  </p>
}

export default Footer

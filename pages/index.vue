<template>
  <div class="container">
    <div class="wrapper">
      <div class="bd-search">
        <input
          type="text"
          class="bd-search__input"
          placeholder="Search"
        >
      </div>
      <div class="bd-c-latest">
        <div class="bd-c-header">
          <h2 class="bd-c-title">
            Latest
          </h2>
        </div>
        <div class="bd-c-content">
          <ul class="bd-c-latest__list">
            <li class="bd-c-latest__items">
              <img
                src="https://images.unsplash.com/photo-1523810632669-22fb8c6008f0?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExMjIwNn0"
                alt="woman sitting on the rock with waterfall in distance during daytime"
                class="bd-c-latest__image"
              >
            </li>
            <li class="bd-c-latest__items">
              <img
                src="https://images.unsplash.com/photo-1546556402-1a63e35b57d9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExMjIwNn0"
                alt="clear glass mug with black beverage"
                class="bd-c-latest__image"
              >
            </li>
            <li class="bd-c-latest__items">
              <img
                src="https://images.unsplash.com/photo-1523810632669-22fb8c6008f0?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExMjIwNn0"
                alt="woman sitting on the rock with waterfall in distance during daytime"
                class="bd-c-latest__image"
              >
            </li>
            <li class="bd-c-latest__items">
              <img
                src="https://images.unsplash.com/photo-1546556402-1a63e35b57d9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExMjIwNn0"
                alt="clear glass mug with black beverage"
                class="bd-c-latest__image"
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*
  font-family: 'Nunito', sans-serif;
  font-family: 'Open Sans', sans-serif;
*/
@import url('https://fonts.googleapis.com/css?family=Nunito|Open+Sans&display=swap');

.container {
  margin: 0 30px;
}

.bd-search__input {
  width: 100%;
  background-color: #f7f7f8;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  padding: 12px 15px;
}

.bd-search {
  margin-top: 30px;
  margin-bottom: 30px;
}

.bd-c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.bd-c-title {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #49484e;
  font-size: 24px;
}

.bd-c-latest__items span {
  position: absolute;
  z-index: 99;
  color: white;
  left: calc(50% - 30px);
  right: calc(50% - 30px);
  transform: translate(calc(50% - 30px), calc(50% - 30px));
  bottom: 0;
  display: inline-block;
  text-align: center;
}

.bd-c-latest__items {
  position: relative;
  width: 100%;
  display: block;
  float: left;
  margin-bottom: 13px;
  border-radius: 8px;
}

.bd-c-latest__items img {
  border-radius: 8px;
}

.bd-c-latest__list::after {
  content: '';
  display: table;
  clear: both;
}
.bd-c-latest__list {
  list-style: none;
  padding: 0;
}

.bd-c-latest__items a {
  display: block;
  max-width: 100%;
}

</style>

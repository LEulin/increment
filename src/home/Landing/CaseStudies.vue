<template>
  <div class="banner" id="case-studies">
    <div class="container">
      <h1 class="title">Case Studies</h1>
      <p class="sub-title">With over 5 years of experience, Increment Technologies Inc. provides innovative productsand services from various categories in accordance to the client's needs</p>
      <div class="row no-gutters card-collection justify-content-center">
        <span class="my-col" v-for="(item, index) in cases" :key="index">
          <center class="single-card">
            <span class="image-holder"><font-awesome-icon :icon="item.src" class="font-awesome-icon" /></span>
            <h6>{{ item.title }}</h6>
            <label>Starting Price:</label>
            <div class="price">
              <h4>{{ item.price }}</h4>
            </div>
            <p class="description">{{ item.desc }}</p>
            <p @click="redirect(item.links)" class="button1">
              Read More
            </p>
          </center>
        </span>
      </div>
      <div class="bottomContainer">
        <div class="bottomImage">
          <img :src="require('assets/gif/case-study-bottom.gif')" alt="bottomGIF">
        </div>
        <div class="bottomFormatter">
          <!-- Formatter -->
          <span></span>
        </div>
        <div class="bottomButton" @mouseover="isHovered = true" @mouseleave="isHovered = false">
          <roundBtn
          id="btn"
          :text="'View More'"
          :changeIcon="'fa fa-angle-double-right'"
          :icon ="'fa fa-angle-right'"
          :route="'/case-studies'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.my-col{
  width: 400px;
  margin-bottom: 10px;
}
.bottomFormatter{
  width: 68%;
}
.bottomButton{
  justify-content: end;
}
.bottomContainer{
  display: flex;
}
.bottomImage{
  display: flex;
  height: 60vh;
  width: 400px;
}
.container{
  min-width: 100%;
  min-height: 200vh;
}
.description{
  // white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 30vh;
}
.font-awesome-icon {
  height: 100px;
  width: 150px;
  left: 229px;
  color: $gradientSecondary;
  font-size: 100px;
  font-weight: 900;
  line-height: 115px;
  letter-spacing: 0em;
}
.sub-title{
  padding: 20px 0px 20px 0px;
  min-height: 0px;
}
.banner {
  background-color: white;
  min-height: 100vh;
  float: left;
  width: 100%;
}
.title {
  font-weight: 700;
  font-size: 50px;
  color: $primary
}
p {
  font-size: 14px;
  padding-right: 8px;
  padding-left: 8px;
  min-height: 30vh;
}
h6 {
  color: $primary;
  font-weight: 700;
  padding: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.row {
  margin-top: 10vh;
  text-align: center;
}
.single-card {
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(228.21deg, rgba(143, 0, 181, 0.90) -0.03%, rgba(0, 184, 159, 0.93) 100%);
  border-radius: 10px;
  // margin: 10px;
  min-height: 75vh;
  min-width: 350px;
  padding-top: 50px;
  margin-right: 10px;
  margin-left: 10px;
}
.container {
  padding-top: 20vh;
  padding-bottom: 20vh;
  text-align: center;
  color: black;
}
.image-holder {
  width: 100%;
  height: 300px;
}
img {
  height: 100%;
  width: 100%;
}
.button1 {
  // background-color: white;
  // border: none;
  // color: #bdbdbd !important;
  // text-align: center;
  // font-size: 13px;
  // cursor: pointer;
  // border-radius: 10px;
  // border: solid 1px #e5e5e5;
  // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  // outline-color: white;
  // padding: 8px 15px;
  // margin-bottom: 15px;
  height: 20px;
  min-height: 20px;
  color: $gradientPrimary;
  text-decoration: underline;
}
.price {
  border: 0.5px solid $secondary;
  // box-sizing: border-box;
  // box-shadow: 0px 0px 5px #00b89f;
  border-radius: 100px;
  background-color: $secondary;
  width: 150px;
  height: 50px;
  padding: 8px;
  margin-bottom: 3vh;
}
label {
  font-size: 12px;
}
h4 {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: white;
  margin-top: 5px;
}
#btn {
  background-color: white;
  color: $secondary;
  border-radius: 30px;
  border: 1px solid $secondary;
  padding: 15px 30px;
  text-align: center;
  margin-top: 40vh;
  // margin-left: 1350px;
  font-weight: 700;
  outline-color: $secondary;
  // box-shadow: 0px 0px 15px rgba(0, 184, 159, 0.25);
}
#btn:hover{
  color: $gradientSecondary;
  border: 1px solid $gradientSecondary;
}
@media screen and (min-width: 993px){

}
@media screen and (max-width: 992px){
  .single-card{
    justify-content: center;
    width: 500px;
  }
  .bottomImage{
    display: none;
  }
  .bottomFormatter{
    display: none;
  }
  .bottomContainer{
    justify-content: center;
  }
  .card-collection{
    display: flex;
    justify-content: center;
  }
  .my-col{
    margin-bottom: 10px;
    width: 500px;
  }
}
</style>
<script>
import ROUTER from "src/router";
import roundBtn from "src/home/generic/roundBtn.vue"
import {
  faCalendarDay,
  faRobot,
  faBuilding,
  faGifts
} from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      cases: [
        {
          src: faCalendarDay,
          title: "Bookings and Appointments",
          desc:
            "An online booking system is a software which allows a potential customer to book and pay for an activity or service directly through a website. That means from the moment a customer decides for a booking date, preferred time, and pays for the booking, everything will be handled online. An efficient way to reduce workload, manpower, and the risk of double bookings.",
          price: "$3,000",
          links: "case-studies/bookings-and-appointments",
        },
        {
          src: faRobot,
          title: "Booking Bot",
          desc:
            "Chatbot is an automated chat system technically built to Facebook pages so that business owners would have less hassle in replying to bulk orders or to plenty of customer inquiries. This is an advantage to business owners of not losing their potential customers just because of neglected orders.",
          price: "$1,000",
          links: "case-studies/booking-bot",
        },
        {
          src: faBuilding,
          title: "Company Profiling",
          desc:
            "Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied groups of people getting a general idea of what the company’s products or services are. One of the solutions to easily execute and build your company profile is through a website.",
          price: "$700",
          links: "case-studies/company-profiling",
        },
        {
          src: faGifts,
          title: "Delivery App",
          desc:
            "A delivery application has features and functionalities such as account management, product management, payment method, location, and other plugin integrations that would depend on the company’s qualifications of the application, thus, transforming the business into mobile applications, helps promote safety and convenience to customers and create hassle-free transactions.",
          price: "$7,000",
          links: "case-studies/delivery-app",
        },
      ],
    isHovered: false,
    };
  },
  components: {
    roundBtn
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    },
  },
};
</script>

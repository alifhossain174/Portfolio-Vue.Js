<template>
<section id="contact" class="paralax-mf footer-paralax bg-image route" style="background-image: url(assets/img/overlay-bg.jpg)">
    <div class="overlay-mf"></div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="contact-mf">
                    <div id="contact" class="box-shadow-full">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="title-box-2">
                                    <h5 class="title-left">
                                        Send Message Us
                                    </h5>
                                </div>
                                <div>
                                    <form class="php-email-form">
                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <div class="form-group">
                                                    <input type="text" v-model="name" class="form-control" placeholder="Your Name">
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-3">
                                                <div class="form-group">
                                                    <input type="email" v-model="email" class="form-control" placeholder="Your Email">
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-3">
                                                <div class="form-group">
                                                    <input type="text" v-model="company_name" class="form-control" placeholder="Company Name">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" v-model="message" rows="5" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-center my-3">
                                                <div class="loading">Loading</div>
                                                <div class="error-message"></div>
                                                <div class="sent-message">Your message has been sent. Thank you!</div>
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <button type="button" class="button button-a button-big button-rouded" @click="sendMessage()">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="title-box-2 pt-4 pt-md-0">
                                    <h5 class="title-left">
                                        Get in Touch
                                    </h5>
                                </div>
                                <div class="more-info">
                                    <p class="lead">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                                        expedita aperiam aliquid at.
                                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                                        mollitia inventore?
                                    </p>
                                    <ul class="list-ico">
                                        <li><span class="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                        <li><span class="bi bi-phone"></span> (617) 557-0089</li>
                                        <li><span class="bi bi-envelope"></span> contact@example.com</li>
                                    </ul>
                                </div>
                                <div class="socials">
                                    <ul>
                                        <li><a href=""><span class="ico-circle"><i class="bi bi-facebook"></i></span></a></li>
                                        <li><a href=""><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
                                        <li><a href=""><span class="ico-circle"><i class="bi bi-twitter"></i></span></a></li>
                                        <li><a href=""><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ContactForm',
    data(){
        return{
            name: '',
            email: '',
            company_name: '',
            message: '',
        }
    },
    methods: {
        sendMessage(){
            axios.post("http://127.0.0.1:8000/api/submit/contact/us/request", {

                name: this.name, 
                email: this.email, 
                company_name: this.company_name,
                message: this.message

            }).then((result) => {

                alert(result.data.message);
                this.name = '';
                this.email = '';
                this.company_name = '';
                this.message = '';

            }).catch((err) => {
                console.log(err)
            });
        }
    },
}
</script>

import React from 'react';
import './style.css';
import card02 from '../../images/card02.PNG';
import card01 from '../../images/card01.jpg';
import card03 from '../../images/card03.PNG';

const Posts = () => {
          return(
                    <div id="news" className="latest-posts">
                              <div className="container">
                                        <h2 className="text-center">اخبار اعمال التصفية</h2>
                                        <p className="section-description text-center">استكمال عملية التسوية لذمم العملاء و التقيد و الالتزام بنظام الخدمات المالية و كذلك قواعد مكافحة غسيل الاموال و تمويل الارهاب الصادرة عن هيئة قطر للاسواق المالية بتحديث فتح الحساب و كذلك ارسال الحوالات الازمة للمستفيد الاول </p>
                                        <div className="row">
                              
                                        <div className="col-md-6 col-lg-4">
                                                  <div className="card">
                                                            <img className="card-img-top" src={card01} alt="" />
                                                                      <div className="card-body">
                                                                                <h4 className="card-title">قرار الجمعية العامة  الغير عادية بتصفية الشركة</h4>
                                                                                <h6 className="card-subtitle mb-2 text-muted">March 28 2021</h6>
                                                                                <p className="card-text">قررت الجمعية العامة  الغير عادية بتصفية الشركة و تعيين السيد / فهد محمد الانصاري كمصفي للشركة  و القيام بجميع اعمال حل و تصفية الشركة </p>
                                                                                <a href="#" className="card-link">إقرأ المزيد</a>
                                                                      </div>
                                                            </div>
                                                  </div>
                              
                                        <div className="col-md-6 col-lg-4">
                                                  <div className="card">
                                                            <img className="card-img-top" src={card02} alt="" />
                                                            <div className="card-body">
                                                                      <h4 className="card-title">اعلان الشركة ايقاف التداول في جريدة الشرق</h4>
                                                                      <h6 className="card-subtitle mb-2 text-muted">May 11 2021</h6>
                                                                      <p className="card-text">تعلن شركة مجموعة الاستثمارات الخليجية تحت التصفية وسطاء لدي بورصة قطر عن تصفيتها اختياريا و انه سوف يتم ايقاف التداول من خلال الشركة يوم الاثنين الموافق 7 يوليو 2021</p>
                                                                      <a href="#" className="card-link">إقرأ المزيد</a>
                                                            </div>
                                                  </div>
                                        </div>
                              
                                        <div className="col-md-6 col-lg-4">
                                                  <div className="card">
                                                            <img className="card-img-top" src={card03} alt="" />
                                                            <div className="card-body">
                                                                      <h4 className="card-title">اعلان تصفية اختيارية لشركة مساهمة خاصة جريدة الوطن</h4>
                                                                      <h6 className="card-subtitle mb-2 text-muted">June 29 2021</h6>
                                                                      <p className="card-text">بناء علي قرار الجمعية الغير عادية المنعقدة بتاريخ 28-03-2021 بحل  و تصفية الشركة سجل تجاري رقم 19306 شركة مساهمة قطرية خاصة و تعيين السيد  فهد محمد الانصاري مصفيا لها و علي من لديه حقوق لدي الشركة ان يتقدم بكتاب مسجل على صندوق البريد رقم 4470 او الحضور الي مقر الشركة لتسليم المستندات المؤيدة لحقوقه و ذلك خلال مدة 75 يوما من تاريخ نشر هذا الاعلان</p>
                                                                      <a href="#" className="card-link">إقرأ المزيد</a>
                                                            </div>
                                                  </div>
                                        </div>
                              
                                        </div>
                              </div>
                    </div>
          )
}

export default Posts
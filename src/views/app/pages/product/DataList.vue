<template>
<b-row>
    <b-colxx class="disable-text-selection">
        <b-row>
            <b-colxx xxs="12">
                <h1>{{ $t('menu.data-list') }}</h1>
                <div class="top-right-button-container">
                    <b-button v-b-modal.modalright variant="primary" size="lg" class="top-right-button">{{ $t('pages.add-new') }}</b-button>
                    <b-modal id="modalright" ref="modalright" :title="$t('pages.add-new-modal-title')" class="modal-right">
                        <b-form>
                            <b-form-group :label="$t('pages.product-name')">
                                <b-form-input v-model="newItem.rfc" v-on:keyup="inputRfc"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.formaPago')">
                              <b-form-select v-model="newItem.formaPago" :options="optionsformaPago"></b-form-select>
                            </b-form-group>
                            <b-form-group :label="$t('pages.total')">
                              <b-form-input v-model="newItem.total" type="number"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.name')">
                              <b-form-input v-model="newItem.name"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.tipo')">
                              <b-form-select v-model="newItem.tipo">
                                <option v-for="optionCfdi in optionsUsoCfdi" :value="optionCfdi.clave">{{optionCfdi.name}}</option>
                              </b-form-select>
                            </b-form-group>
                            <hr>
                              Productos / Servicios
                            <hr>
                            <b-form-group :label="$t('pages.ClaveProdServ')">
                                <b-form-input v-model="newItem.ClaveProdServ" type="number"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.ClaveUnidad')">
                                <b-form-input v-model="newItem.ClaveUnidad"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.NoIdentificacion')">
                                <b-form-input v-model="newItem.NoIdentificacion" type="number"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.Cantidad')">
                                <b-form-input v-model="newItem.Cantidad" type="number"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.Unidad')">
                                <b-form-input v-model="newItem.Unidad" type="number"/>
                            </b-form-group>

                            <b-form-group :label="$t('pages.Descripcion')">
                                <b-form-input v-model="newItem.Descripcion"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.ValorUnitario')">
                                <b-form-input v-model="newItem.ValorUnitario" type="number"/>
                            </b-form-group>
                            <b-form-group :label="$t('pages.Importe')">
                                <b-form-input v-model="newItem.Importe" type="number"/>
                            </b-form-group>
                        </b-form>

                        <template slot="modal-footer">
                            <b-button variant="outline-secondary" @click="hideModal('modalright')">{{ $t('pages.cancel') }}</b-button>
                            <b-button variant="primary" @click="addNewItem()" class="mr-1">{{ $t('pages.submit') }}</b-button>
                        </template>
                    </b-modal>
                </div>
                <piaf-breadcrumb />
                <div class="separator mb-5" />
            </b-colxx>
        </b-row>
        <template v-if="isLoad">
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in datos">
                <td>{{data.id_fac}}</td>
                <td>{{data.fecha_fac}}</td>

                <td>data</td>
                <!-- <td>{{pro.name}}</td> -->
              </tr>
            </tbody>
          </table>
          <!-- descomentar tabla -->
            <!-- <b-row v-if="displayMode==='image'" key="image">
                <b-colxx sm="6" lg="4" xl="3" class="mb-3" v-for="(item,index) in items" :key="index" :id="item.id">
                    <image-list-item :key="item.id" :data="item" :selected-items="selectedItems" @toggle-item="toggleItem" v-contextmenu:contextmenu />
                </b-colxx>
            </b-row>
            <b-row v-else-if="displayMode==='thumb'" key="thumb">
                <b-colxx xxs="12" class="mb-3" v-for="(item,index) in items" :key="index" :id="item.id">
                    <thumb-list-item :key="item.id" :data="item" :selected-items="selectedItems" @toggle-item="toggleItem" v-contextmenu:contextmenu />
                </b-colxx>
            </b-row>
            <b-row v-else-if="displayMode==='list'" key="list">
                <b-colxx xxs="12" class="mb-3" v-for="(item,index) in items" :key="index" :id="item.id">
                    <data-list-item :key="item.id" :data="item" :selected-items="selectedItems" @toggle-item="toggleItem" v-contextmenu:contextmenu />
                </b-colxx>
            </b-row>
            <b-row v-if="lastPage>1">
                <b-colxx xxs="12">
                    <b-pagination-nav :number-of-pages="lastPage" :link-gen="linkGen" v-model="page" :per-page="perPage" align="center">
                        <template v-slot:next-text>
                            <i class="simple-icon-arrow-right" />
                        </template>
                        <template v-slot:prev-text>
                            <i class="simple-icon-arrow-left" />
                        </template>
                        <template v-slot:first-text>
                            <i class="simple-icon-control-start" />
                        </template>
                        <template v-slot:last-text>
                            <i class="simple-icon-control-end" />
                        </template>
                    </b-pagination-nav>
                </b-colxx>
            </b-row> -->
            <!-- descomentar tabla -->
        </template>
        <template v-else>
            <div class="loading"></div>
        </template>
        <v-contextmenu ref="contextmenu" @contextmenu="handleContextmenu">
            <v-contextmenu-item @click="onContextCopy()">
                <i class="simple-icon-docs" />
                <span>Copy</span>
            </v-contextmenu-item>
            <v-contextmenu-item @click="onContextArchive()">
                <i class="simple-icon-drawer" />
                <span>Move to archive</span>
            </v-contextmenu-item>
            <v-contextmenu-item @click="onContextDelete()">
                <i class="simple-icon-trash" />
                <span>Delete</span>
            </v-contextmenu-item>
        </v-contextmenu>
    </b-colxx>
</b-row>
</template>

<script>
import {
    DataListIcon,
    ThumbListIcon,
    ImageListIcon
} from '../../../../components/Svg'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import axios from 'axios'

import ImageListItem from '../../../../components/Listing/ImageListItem'
import ThumbListItem from '../../../../components/Listing/ThumbListItem'
import DataListItem from '../../../../components/Listing/DataListItem'
import {
    apiUrl
} from '../../../../constants/config'

export default {
    components: {
        'data-list-icon': DataListIcon,
        'thumb-list-icon': ThumbListIcon,
        'image-list-icon': ImageListIcon,
        'v-select': vSelect,
        'image-list-item': ImageListItem,
        'thumb-list-item': ThumbListItem,
        'data-list-item': DataListItem
    },
    data() {
        return {
          selected: null,
            datos:[],
            optionsformaPago: [
            { value: '01', text: 'Efectivo' },
            { value: '02', text: 'Cheque nominativo' },
            { value: '03', text: 'Transferencia electrónica de fondos' },
            { value: '04', text: 'Tarjeta de Crédito' },
            { value: '05', text: 'Monedero Electrónico' },
            { value: '06', text: 'Dinero electrónico' },
            { value: '08', text: 'Vales de despensa' },
            { value: '28', text: 'Tarjeta de Crédito' },
            { value: '29', text: 'Tarjeta de Servicio' },
            { value: '30', text: 'Otros' }
          ],
          optionsUsoCfdi : [],
            isLoad: false,
            apiBase: apiUrl + '/cakes/fordatatable',
            displayMode: 'list',
            sort: {
                column: 'title',
                label: 'Product Name'
            },
            sortOptions: [{
                    column: 'title',
                    label: 'Product Name'
                },
                {
                    column: 'category',
                    label: 'Category'
                },
                {
                    column: 'status',
                    label: 'Status'
                }
            ],
            page: 1,
            perPage: 4,
            search: '',
            from: 0,
            to: 0,
            total: 0,
            lastPage: 0,
            items: [],
            pageSizes: [4, 8, 12],
            selectedItems: [],
            categories: [{
                    label: 'Cakes',
                    value: 'Cakes'
                },
                {
                    label: 'Cupcakes',
                    value: 'Cupcakes'
                },
                {
                    label: 'Desserts',
                    value: 'Desserts'
                }
            ],
            statuses: [{
                    text: 'ON HOLD',
                    value: 'ON HOLD'
                },
                {
                    text: 'PROCESSED',
                    value: 'PROCESSED'
                }
            ],
            newItem: {
                rfc: '',
                formaPago:'',
                total:'',
                name: '',
                tipo: '',
                ClaveProdServ : '',
                ClaveUnidad: '',
                NoIdentificacion: '',
                Cantidad: '',
                Unidad: '',
                Descripcion: '',
                ValorUnitario: '',
                Importe: ''
            }
        }
    },
    methods: {
        loadItems() {
            this.isLoad = false

            axios
                .get(this.apiUrl)
                .then(response => {
                    return response.data
                })
                .then(res => {
                    this.total = res.total
                    this.from = res.from
                    this.to = res.to
                    this.items = res.data
                    this.perPage = res.per_page
                    this.selectedItems = []
                    this.lastPage = res.last_page
                    this.isLoad = true
                })

                const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
              };

                var urlBase = 'http://035cb0de.ngrok.io';
                  axios.post(urlBase +'/facturar/consultarfacturas', {
                    headers: headers,
                    validateStatus: (status) => {
                      return true; // I'm always returning true, you may want to do it depending on the status received
                    },
                  })
                  .then(response => {
                    console.log(response.data.data);
                    this.datos = response.data.data;
                  })
                    .catch(function (error) {
                      console.log('error');
                    })
                    .finally(function () {
                      console.log('finally');
                      // always executed
                    });
        },
        hideModal(refname) {
            this.$refs[refname].hide()
        },
        changeDisplayMode(displayType) {
            this.displayMode = displayType
        },
        changePageSize(perPage) {
            this.perPage = perPage
        },
        changeOrderBy(sort) {
            this.sort = sort
        },
        addNewItem() {
          if(this.newItem.rfc != '' && this.newItem.formaPago != '' && this.newItem.total != '' && this.newItem.name != '' && this.newItem.tipo != '' &&
          this.newItem.ClaveProdServ != '' && this.newItem.ClaveUnidad != '' && this.newItem.NoIdentificacion != '' && this.newItem.Cantidad != '' &&
          this.newItem.Descripcion != '' && this.newItem.ValorUnitario != '' && this.newItem.Importe != ''){

            var arrayOfConcept = [{
                ClaveProdServ: this.newItem.ClaveProdServ,
                ClaveUnidad: this.newItem.ClaveUnidad,
                NoIdentificacion: this.newItem.NoIdentificacion,
                Cantidad: this.newItem.Cantidad,
                Unidad: this.newItem.ClaveUnidad,
                Descripcion: this.newItem.Descripcion,
                ValorUnitario: this.newItem.ValorUnitario,
                Importe: this.newItem.Importe
            }];

            //Conexion
            var urlBase = 'http://035cb0de.ngrok.io';
            var data = {};
            data['formaPago'] = this.newItem.formaPago;
            data['total'] = this.newItem.total;
            data['moneda'] = 'MXN';
            data['tipoDeComprobante'] = 'I';
            data['metodoPago'] = 'PUE';
            data['lugarExpedicion'] = '06700';
            data['receptorRfc'] = this.newItem.rfc;
            data['regimenFiscal'] = 612;
            data['usoCfdi'] = this.newItem.tipo;
            data['conceptos'] = arrayOfConcept;



            const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          };

            axios.post(urlBase+ '/facturar/crearfactura',
                      data, {
                        headers: headers
                      })
                      .then((response) => {
                        console.log(response.data[0]);
                        this.hideModal('modalright');
                        this.newItem = {};
                      })
                      .catch((error) => {
                        console.log(error);
                        this.hideModal('modalright');
                        this.newItem = {};
                      })
            // Importe: ''

          }else{
             this.$swal(
               'Error', 'Faltan campos', 'error'
             );
          }
        },
        selectAll(isToggle) {
            if (this.selectedItems.length >= this.items.length) {
                if (isToggle) this.selectedItems = []
            } else {
                this.selectedItems = this.items.map(x => x.id)
            }
        },
        keymap(event) {
            switch (event.srcKey) {
                case 'select':
                    this.selectAll(false)
                    break
                case 'undo':
                    this.selectedItems = []
                    break
            }
        },
        getIndex(value, arr, prop) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][prop] === value) {
                    return i
                }
            }
            return -1
        },
        toggleItem(event, itemId) {
            if (event.shiftKey && this.selectedItems.length > 0) {
                let itemsForToggle = this.items
                var start = this.getIndex(itemId, itemsForToggle, 'id')
                var end = this.getIndex(
                    this.selectedItems[this.selectedItems.length - 1],
                    itemsForToggle,
                    'id'
                )
                itemsForToggle = itemsForToggle.slice(
                    Math.min(start, end),
                    Math.max(start, end) + 1
                )
                this.selectedItems.push(
                    ...itemsForToggle.map(item => {
                        return item.id
                    })
                )
            } else {
                if (this.selectedItems.includes(itemId)) {
                    this.selectedItems = this.selectedItems.filter(x => x !== itemId)
                } else this.selectedItems.push(itemId)
            }
        },
        handleContextmenu(vnode) {
            if (!this.selectedItems.includes(vnode.key)) {
                this.selectedItems = [vnode.key]
            }
        },
        onContextCopy() {
            console.log(
                'context menu item clicked - Copy Items: ',
                this.selectedItems
            )
        },
        onContextArchive() {
            console.log(
                'context menu item clicked - Move to Archive Items: ',
                this.selectedItems
            )
        },
        onContextDelete() {
            console.log(
                'context menu item clicked - Delete Items: ',
                this.selectedItems
            )
        },
        linkGen(pageNum) {
            return '#page-' + pageNum
        },
        inputRfc(){
          this.newItem.rfc = this.newItem.rfc.replace(/[^0-9^a-z^A-Z]+/g, '');
          var tipoPersona;
          var rfc = this.newItem.rfc;
          var arrayData = [];

          var optionsUsoCfdi = [//uso CFDI
              {
                  name: 'Adquisición de mercancías',
                  clave: 'G01',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Gastos en general',
                  clave: 'G03',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Construcciones',
                  clave: 'I01',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Mobiliario y equipo de oficina por inversiones',
                  clave: 'I02',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Equipo de transporte',
                  clave: 'I03',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Equipo de cómputo y accesorios',
                  clave: 'I04',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Dados, troqueles, moldes, matrices y herramental',
                  clave: 'I05',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Comunicaciones telefónicas',
                  clave: 'I06',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Comunicaciones satelitales',
                  clave: 'I07',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Otra maquinaria y equipo',
                  clave: 'I08',
                  pFisica: 'si',
                  pMoral: 'si'
              },
              {
                  name: 'Honorarios médicos, dentales y gastos hospitalarios',
                  clave: 'D01',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Gastos médicos por incapacidad o discapacidad',
                  clave: 'D02',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Gastos funerales',
                  clave: 'D03',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Donativos',
                  clave: 'D04',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)',
                  clave: 'D05',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Aportaciones voluntarias al SAR',
                  clave: 'D06',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Primas por seguros de gastos médicos',
                  clave: 'D07',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Gastos de transportación escolar obligatoria',
                  clave: 'D08',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones',
                  clave: 'D09',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Pagos por servicios educativos (colegiaturas)',
                  clave: 'D10',
                  pFisica: 'si',
                  pMoral: 'no'
              },
              {
                  name: 'Por definir',
                  clave: 'P01',
                  pFisica: 'si',
                  pMoral: 'si'
              }
          ];

          this.optionsUsoCfdi = arrayData;

              if (rfc !== '' && rfc.length > 11) {
                  //validando que tipo de persona es
                  var checkRfc = (rfc.length > 12 ? tipoPersona = 'fisica' : tipoPersona = 'moral');
                  // funcion
                  // this.newItem.tipo.empty();
                      optionsUsoCfdi.forEach(function (item) {
                          if (tipoPersona === 'fisica') {
                              //generando option
                              if (item.pFisica === 'si') {
                                arrayData.push(item);
                              }
                          } else if (tipoPersona === 'moral') {
                              //generando option
                              if (item.pMoral === 'si') {
                                arrayData.push(item);
                              }
                          }
                      });
              }
        }
    },
    computed: {
        isSelectedAll() {
            return this.selectedItems.length >= this.items.length
        },
        isAnyItemSelected() {
            return (
                this.selectedItems.length > 0 &&
                this.selectedItems.length < this.items.length
            )
        },
        apiUrl() {
            return `${this.apiBase}?sort=${this.sort.column}&page=${
        this.page
      }&per_page=${this.perPage}&search=${this.search}`
        }
    },
    watch: {
        search() {
            this.page = 1
        },
        apiUrl() {
            this.loadItems()
        }
    },
    mounted() {
        this.loadItems()
    }
}
</script>

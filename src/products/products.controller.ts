import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return {
      message: 'Lista de produtos',
      produtos: [
        'Café', 'Leite', 'Bolo', 'Pão', 'Queijo', 'Presunto', 'Manteiga', 'Açúcar',
        'Arroz', 'Feijão', 'Macarrão', 'Molho de tomate', 'Farinha de trigo', 'Fermento',
        'Ovo', 'Biscoito recheado', 'Refrigerante', 'Suco de caixinha', 'Água mineral',
        'Iogurte', 'Cereal matinal', 'Chocolate', 'Gelatina', 'Salgadinho', 'Batata inglesa',
        'Batata doce', 'Cenoura', 'Tomate', 'Cebola', 'Alho', 'Pimentão verde', 'Abobrinha',
        'Berinjela', 'Chuchu', 'Repolho', 'Alface', 'Couve', 'Espinafre', 'Pepino',
        'Frango inteiro', 'Coxa de frango', 'Carne bovina', 'Carne moída', 'Peixe tilápia',
        'Linguiça calabresa', 'Salsicha', 'Hambúrguer congelado', 'Massa para pastel',
        'Requeijão cremoso', 'Creme de leite', 'Leite condensado', 'Maionese', 'Ketchup',
        'Mostarda', 'Óleo de soja', 'Azeite de oliva', 'Vinagre', 'Sal', 'Pimenta do reino',
        'Tempero baiano', 'Caldo de galinha', 'Sabão em pó', 'Amaciante de roupas',
        'Sabonete', 'Shampoo', 'Condicionador', 'Creme dental', 'Escova de dente',
        'Fio dental', 'Papel higiênico', 'Papel toalha', 'Detergente', 'Esponja de lavar',
        'Desinfetante', 'Álcool 70%', 'Água sanitária', 'Saco de lixo', 'Pano de chão',
        'Pano de prato', 'Vassoura', 'Rodo', 'Pá de lixo', 'Balde', 'Velas', 'Pilhas AA',
        'Fósforos', 'Isqueiro', 'Guardanapo', 'Copo descartável', 'Prato descartável',
        'Talheres descartáveis', 'Papel alumínio', 'Filme plástico', 'Filtro de café',
        'Lâmpada', 'Tomada', 'Extensão elétrica', 'Chuveiro', 'Bucha vegetal',
        'Desodorante', 'Sabão em barra', 'Cotonete', 'Algodão', 'Absorvente',
        'Fralda descartável', 'Lenço umedecido', 'Inseticida', 'Repelente'
      ],
      data: new Date(),
    };
  }
}

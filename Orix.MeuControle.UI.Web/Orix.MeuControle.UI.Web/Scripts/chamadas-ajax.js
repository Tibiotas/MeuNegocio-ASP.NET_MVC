﻿
var Ajax = {
    Adicionar: function (url) {
        $.ajax(
            {
                type: 'GET',
                url: url,
                dataType: 'html',
                cache: false,
                async: true,
                beforeSend: function () {
                    $('#myModal').modal('show');
                },
                success: function (data) {
                    $('#tituloFooter').text("Adicionando ...");
                    $('#conteudoModal').html(data);
                    $('#modalConfiguracao').modal('show');
                },
                complete: function () {
                    $('#myModal').modal('hide');
                }
            });
    },

    Excluir: function (url) {
        $.ajax({
            type: 'GET',
            url: url,
            async: true,
            cache: false,
            beforeSend: function () {
                $('#myModal').modal('show');
            },
            success: function (data) {
                $('#mensagem').html(data);
                Ajax.CarregarTabelas();
            },
            complete: function () {
                $('#myModal').modal('hide');
            }
        });
    },
    Editar: function (url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'html',
            cache: false,
            async: true,
            beforeSend: function () {
                $('#myModal').modal('show');
            },
            success: function (data) {
                $('#tituloFooter').text("Adicionando ...");
                $('#conteudoModal').html(data);
                $('#modalConfiguracao').modal('show');
                Ajax.CarregarTabelas();
            },
            complete: function () {
                $('#myModal').modal('hide');
            }
        });
    },

    CarregarTabelas: function() {
    $.ajax(
        {
            type: 'GET',
            url: '/ControleMapas/Letra/Lista',
            dataType: 'html',
            cache: false,
            async: true,
            beforeSend: function () {
                $('#myModal').modal('show');
            },
            success: function (data) {
                $('#partialLetra').html(data);
            },
            complete: function () {
                $('#myModal').modal('hide');
            }
        });

    $.ajax(
        {
            type: 'GET',
            url: '/ControleMapas/Saida/Lista',
            dataType: 'html',
            cache: false,
            async: true,
            beforeSend: function () {
                $('#myModal').modal('show');
            },
            success: function (data) {
                $('#partialSaida').html(data);
            },
            complete: function () {
                $('#myModal').modal('hide');
            }
        });

    $.ajax(
        {
            type: 'GET',
            url: '/ControleMapas/Territorio/Lista',
            dataType: 'html',
            cache: false,
            async: true,
            beforeSend: function () {
                $('#myModal').modal('show');
            },
            success: function (data) {
                $('#partialTerritorio').html(data);
            },
            complete: function () {
                $('#myModal').modal('hide');
            }
        });
    }
}

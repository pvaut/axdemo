
define([
        "require", "jquery", "_",
        "AXM/AXM",
        "TestPopup1", "TestPopup2"
    ],
    function (
        require, $, _,
        AXM,
        TestPopup1, TestPopup2
    ) {

        var Module = {};

        Module.create = function() {
            var tableData = AXM.Tables.TableData.DummyData(150, 0);
            tableData.addTextCol('col1',5);
            tableData.addTextCol('col2',25);
            tableData.addFloatCol('col3',0,1);
            tableData.addIntCol('col4',0,1000);
            tableData.addFloatCol('col5',-100,100);
            tableData.addTextCol('col6',100);
            tableData.addTextCol('col7',150);
            var tableInfo = AXM.Tables.TableInfo.tableInfo();
            tableInfo.addColumn('index').setName('Index').setDispSize(60).enableSort();
            tableInfo.addColumn('col1').setName('Column 1').enableSort().setOnOpen(function() {AXM.Windows.SimplePopups.MessageBox('Opened column 1')});
            tableInfo.addColumn('col2').enableSort().setOnOpen(function() {AXM.Windows.SimplePopups.MessageBox('Opened column 2')});
            tableInfo.addColumn('col3').enableSort().setOnOpen(function() {AXM.Windows.SimplePopups.MessageBox('Opened column 3')});
            tableInfo.addColumn('col4');
            tableInfo.addColumn('col5');
            tableInfo.addColumn('col6');
            tableInfo.addColumn('col7');
            tableInfo.setOnOpenRow(function(rowNr) { AXM.Windows.SimplePopups.MessageBox('Opened row '+rowNr); });
            //return PanelTable.create('tb1a', tableData, tableInfo);
            return AXM.Panels.PanelTable.createTableViewerFrame('tb1a', tableData, tableInfo);
        };


        return Module;
    });


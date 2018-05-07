// Generated by CoffeeScript 2.3.0
(function () {
  window.onload = function () {
    var center, galactic_center;
    paper.setup("myCanvas");
    center = paper.view.getCenter();
    galactic_center = new paper.Path(center, center.add([300, 0]));
    galactic_center.strokeColor = 'black';
    jQuery.getJSON("pulsars.json", function (data, status) {
      var p2, pulsars;
      console.log(`Found ${data.length} pulsars`);
      pulsars = _.map(original_ids, function (id) {
        return _.find(data, {
          'PSRJ': id
        });
      });
      console.log(`Found ${pulsars.length} original pulsars`);
      p2 = convertATNF(pulsars);
      return _.each(p2, function (pulsar) {
        return drawPulsar(pulsar, center, 80, 'black');
      });
    });
    return paper.view.draw();
  };
}).call(this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2N1cnJlbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxDQUFBLFlBQUE7QUFBQSxTQUFBLE1BQUEsR0FBZ0IsWUFBQTtBQUNiLFFBQUEsTUFBQSxFQUFBLGVBQUE7QUFBQSxVQUFBLEtBQUEsQ0FBQSxVQUFBO0FBQ0EsYUFBUyxNQUFNLElBQU4sQ0FBQSxTQUFBLEVBQVQ7QUFDQSxzQkFBa0IsSUFBSSxNQUFKLElBQUEsQ0FBQSxNQUFBLEVBQXVCLE9BQUEsR0FBQSxDQUFXLENBQUEsR0FBQSxFQUFsQyxDQUFrQyxDQUFYLENBQXZCLENBQWxCO0FBQ0Esb0JBQUEsV0FBQSxHQUE4QixPQUE5QjtBQUNBLFdBQUEsT0FBQSxDQUFBLGNBQUEsRUFBK0IsVUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQzVCLFVBQUEsRUFBQSxFQUFBLE9BQUE7QUFBQSxjQUFBLEdBQUEsQ0FBWSxTQUFTLEtBQVQsTUFBWixVQUFBO0FBQ0EsZ0JBQVUsRUFBQSxHQUFBLENBQUEsWUFBQSxFQUFvQixVQUFBLEVBQUEsRUFBQTtlQUFPLEVBQUEsSUFBQSxDQUFBLElBQUEsRUFBYTtBQUFDLGtCQUFPO0FBQVIsU0FBYixDO0FBQTNCLE9BQUEsQ0FBVjtBQUNBLGNBQUEsR0FBQSxDQUFZLFNBQVMsUUFBVCxNQUFaLG1CQUFBO0FBQ0EsV0FBSyxZQUFBLE9BQUEsQ0FBTDthQUNBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBVyxVQUFBLE1BQUEsRUFBQTtlQUFXLFdBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxFQUFBLEVBQUEsT0FBQSxDO0FBQXRCLE9BQUEsQztBQUxILEtBQUE7V0FNQSxNQUFNLElBQU4sQ0FBQSxJQUFBLEU7QUFYYSxHQUFoQjtDQUFBLEUsSUFBQSxDLElBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbndpbmRvdy5vbmxvYWQgPSAtPlxuICAgcGFwZXIuc2V0dXAoXCJteUNhbnZhc1wiKVxuICAgY2VudGVyID0gcGFwZXIudmlldy5nZXRDZW50ZXIoKVxuICAgZ2FsYWN0aWNfY2VudGVyID0gbmV3IHBhcGVyLlBhdGggY2VudGVyLCBjZW50ZXIuYWRkKFszMDAsMF0pXG4gICBnYWxhY3RpY19jZW50ZXIuc3Ryb2tlQ29sb3IgPSAnYmxhY2snXG4gICBqUXVlcnkuZ2V0SlNPTiBcInB1bHNhcnMuanNvblwiLCAoZGF0YSxzdGF0dXMpLT5cbiAgICAgIGNvbnNvbGUubG9nIFwiRm91bmQgI3tkYXRhLmxlbmd0aH0gcHVsc2Fyc1wiXG4gICAgICBwdWxzYXJzID0gXy5tYXAgb3JpZ2luYWxfaWRzLCAoaWQpLT4gXy5maW5kIGRhdGEsIHsnUFNSSic6aWQgfVxuICAgICAgY29uc29sZS5sb2cgXCJGb3VuZCAje3B1bHNhcnMubGVuZ3RofSBvcmlnaW5hbCBwdWxzYXJzXCJcbiAgICAgIHAyID0gY29udmVydEFUTkYgcHVsc2Fyc1xuICAgICAgXy5lYWNoIHAyLCAocHVsc2FyKS0+IGRyYXdQdWxzYXIgcHVsc2FyLCBjZW50ZXIsIDgwLCdibGFjaydcbiAgIHBhcGVyLnZpZXcuZHJhdygpXG4iXSwic291cmNlUm9vdCI6Ii4uIn0=
//# sourceURL=/Users/thomas/Documents/Projects/Creative/Tattoo/Pulsar map/js/current.coffee